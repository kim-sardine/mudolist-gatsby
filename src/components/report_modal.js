import * as React from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

const ReportModal = () => {

  const [formValues, setFormValues] = React.useState({
    title: '',
    email: '',
    content: '',
  });

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formValues,
      }),
    })
      .then(() => {
        alert('소중한 의견 감사합니다.');
        document.getElementById('closeModalBtn').click();
      })
      .catch(error => alert(error));
  };

  return (
    <div className="modal fade" id="reportModal" tabIndex="-1" aria-labelledby="reportModalLabel" aria-hidden="true" data-bs-backdrop="false">
      <div className="modal-dialog">
        <form name="report" method="post" action="/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="reportModalLabel">제보 / 건의</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <input type="hidden" name="form-name" value="report" />
                <div className="mb-3">
                  <label htmlFor="title" className="col-form-label">제목:</label>
                  <input type="text" className="form-control" id="title" name="title" required onChange={handleChange}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="col-form-label">답변 받을 이메일 주소 (선택) :</label>
                  <input type="email" className="form-control" id="email" name="email" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="col-form-label">내용:</label>
                    <textarea className="form-control" id="content" name="content" required onChange={handleChange}></textarea>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" id="closeModalBtn" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
              <button type="submit" className="btn btn-primary">등록</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default ReportModal