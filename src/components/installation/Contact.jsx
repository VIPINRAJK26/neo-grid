import "./Contact.css"

const Contact = () => {
  return (
    <div className="container contact py-5">
      <div className="contact-head py-4">
        <h2 className='fw-bold'>Ensure Your Power Backup with <br /> Trusted Installation</h2>
      </div>
      <div className="contact-buttons d-flex gap-3">
        <button className="btn bg-success rounded-3 fs-6 fw-bold text-white">
          Contact Now
        </button>
        <button className="btn bg-info rounded-3 fs-6 fw-bold text-white">
          Contact with the Technical Team
        </button>
      </div>
    </div>
  );
}

export default Contact