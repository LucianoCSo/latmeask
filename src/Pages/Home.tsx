import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ilustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import "../styles/auth.scss";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas de sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separetor">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit">Entre na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
