import chefClaudeIcon from "../assets/chefclaude_icon.png";

export default function Header() {
    return (
        <header>
            <img src={chefClaudeIcon} alt="chef claude icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}