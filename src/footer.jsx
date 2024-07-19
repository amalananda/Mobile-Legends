const Footer = () => {
  const links = [
    [
      { label: "Kontak kami", key: "header" },
      { image: "whatsapp.png", label: "+6281225097694", key: "item-1" },
      { image: "socials.png", label: "@malls_store", key: "item-2" },
    ],
  ];
  return (
    <div className="footer-links">
      {links.map((col, index) => (
        <ul className={`col col-${index+1}`} key={`col-${index}`}>
          {col.map((link) => (
            <li key={`link-${link.key}`} className={link.image ? "contact-item" : "contact-header"}>
              {link.image && (
                <img className="image-footer" src={link.image} alt="" />
              )}
              {link.label}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Footer;
