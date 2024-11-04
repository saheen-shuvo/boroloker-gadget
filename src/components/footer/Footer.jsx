
const Footer = () => {
    return (
        <div className="mt-96 bg-base-200 text-black px-2 lg:px-36 ">
          <div className="pb-10 pt-4">
            <h1 className="text-center pt-10 text-3xl font-bold">Boroloker Gadget</h1>
            <p className="text-center text-xs py-2 text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
<footer className="flex justify-around gap-1 pb-14 pt-10">
  <nav className="flex flex-col gap-1 lg:gap-2">
    <h6 className="text-lg text-black font-semibold">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className="flex flex-col gap-1 lg:gap-2">
    <h6 className="text-lg text-black font-semibold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav  className="flex flex-col gap-1 lg:gap-2">
    <h6 className="text-lg text-black font-semibold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;