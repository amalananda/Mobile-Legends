const Footer = () => {
  const links = [
    [
      { label: "Kontak kami", key: "header" },
      { image: "whatsapp.png", label: "+6281225097694", key: "item-1" },
      { image: "instagram.png", label: "@malls_store", key: "item-2" },
    ],
  ];
  return (
    <div className="footer-links">
      {links.map((col) => (
        <ul className={"col col-${index+1}"} key={"col-${index}"}>
          {col.map((link) => (
            <li key={"link-${col}-${index}"}>
              <img className="imagefooter" src={link.image} />
              {link.label}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Footer;
