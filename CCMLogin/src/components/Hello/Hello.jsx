import "./Hello.css";

export default function Hello() {
  return (
    <div className="hello-page">

      <div className="hello-card">

        <img
          src="/logos/Logo-CCM (2).png"
          alt="CCM"
          className="hello-logo"
        />

        <div className="hello-smile">
          :)
        </div>

        <span className="hello-label">
          LOGIN REALIZADO
        </span>

        <h1>
          Hello World!
        </h1>

        <p>
          Seja bem-vindo a CCM.
          <br />
          Você entrou com sucesso :)
        </p>

        <div className="hello-line"></div>

      </div>

    </div>
  );
}