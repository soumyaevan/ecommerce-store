import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Conver Prisma object into a regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function formatNumberWithDecimal(value: number): string {
  const [integerPart, decimalPart] = value.toString().split(".");
  return decimalPart
    ? `${integerPart}.${decimalPart.padEnd(2, "0")}`
    : `${integerPart}.00`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError(error: unknown) {
  if (error instanceof ZodError) {
    return error.issues.map((issue) => issue.message).join(". ");
  }
  const e = error as {
    name?: string;
    code?: string;
    message?: unknown;
    meta?: { target?: string[] };
  };

  if (e?.code === "P2002" && e?.name === "PrismaClientKnownRequestError") {
    const field = e.meta?.target?.[0] ?? "Email";
    return `${field.charAt(0).toUpperCase()}${field.slice(1)} already exists`;
  }

  if (typeof e?.message === "string") return e.message;
  return "Something went wrong";
}
