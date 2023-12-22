import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from '../../components/Container'
import styles from "./Ajude.module.css"

function Ajuda() {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.ajuda}>
                    <h2>Ajuda</h2>
                    <section className={styles.contatos}>
                        <div className={styles.emergencia}>
                            <h3>Telefones para emergências</h3>
                            <p>ACESF – Administração de Cemitérios e Serviços Funerários de Londrina <span className={styles.funeraria}>(43)3323-7275</span></p>
                            <p>Ambulância / SAMU <span className={styles.ambulancia}>192</span></p>
                            <p>Bombeiros / SIATE <span className={styles.bombeiro}>193</span></p>
                            <p>Delegacia da Mulher	<span className={styles.mulher}>3322-1633</span></p>
                            <p>Disque-Denúncia (Polícia Civil) <span className={styles.denunciacivil}>197</span></p>
                            <p>Defesa Civil	<span className={styles.defesacivil}>199</span></p>
                            <p>Polícia Civil <span className={styles.policiacivil}>147</span></p>
                            <p>Disque-Denúncia (Polícia Militar) <span className={styles.denunciamilitar}>181</span></p>
                            <p>Polícia Militar /Radiopatrulha /Trânsito	<span className={styles.policiamilitar}>190</span></p>
                            <p>Guarda Municipal	<span className={styles.guardamunicipal}>153</span></p>
                            <p>Polícia Federal	<span className={styles.policiafederal}>194</span></p>
                            <p>Polícia Rodoviária	<span className={styles.policiarodoviaria}>(43)3378-1900</span></p>
                        </div>

                        <hr />

                        <div className={styles.divulga}>
                            <h3>Telefones de meios de divulgação</h3>
                            <p>Rádio novo tempo Londrina (43) 99875-0009</p>
                        </div>

                        <hr />

                        <div className={styles.pastoral}>
                            <h3>Ajuda pastoral</h3>
                            <p>Pr. Darlei</p>
                        </div>

                        <hr />

                    </section>
                </div>

            </Container>
            <Footer />
        </>
    );
}

export default Ajuda