import styles from '../styles/Footer.module.scss'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={styles.container}>
        <Image 
            src="/images/logo.png"
            width={90}
            height={50}
            alt="imagem"
       />
       <ul>
            <li>Termos e Condições de Uso</li>
            <li>Política de privacidade</li>
            <li>Proteção de Dados no Brasil</li>
            <li>Anúncios personalizados</li>
            <li>Dispositivos compatíveis</li>
            <li>Ajuda</li>
            <li>Sobre o Disney+</li>
       </ul>

       <span>® 2022 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</span>
        <span>Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</span>
    </footer>
  )
}
