import { APP_NAME } from "@/lib/constants";

const currentYear = new Date().getFullYear();
const Footer = () => {
    return(
        <footer className="border-t">
            <div className="p-5 flex-center text-gray-400">
                {currentYear} {APP_NAME}. All Rights Reserved
            </div>
        </footer>
    )
}
export default Footer;