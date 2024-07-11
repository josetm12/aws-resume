function Footer() {
  const currentYear = new Date().getFullYear();
  const visitCountDummy = 1;

  return (
    <div className="w-full text-center p-1 mt-10">
      <div className="text-sm">Visitor count: {visitCountDummy}</div>
      <p className="text-gray-700 text-sm">
        &copy; {currentYear} JTM. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
