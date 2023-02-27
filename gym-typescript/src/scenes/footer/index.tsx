import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    Founded in 2022, EvoGym has risen to become the leader in yoga across Asia before arriving on the Upper East Side and Upper West Side of New York. At EvoGym, every member enjoys countless opportunities to advance their practice with incredible instructors, an unbeatable schedule of classes, and our serene, luxurious studios.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p>Ullamcorper vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Give us a ring:</p>
                <p>(123) 456-7890</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;