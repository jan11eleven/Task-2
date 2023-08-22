function Contact({ contactDetails }) {
  const { name, mobile, email } = contactDetails;
  return (
    <div className="grid grid-cols-3">
      <div className="border-b-2 py-2 font-bold">{name}</div>
      <div className="border-b-2 py-2 font-bold">{mobile}</div>
      <div className="border-b-2 py-2 font-bold">{email}</div>
    </div>
  );
}

export default Contact;
