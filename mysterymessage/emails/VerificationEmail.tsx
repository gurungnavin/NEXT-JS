import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button
} from '@react-email/components'

interface VerificationEmailProps {
  username : string,
  otp : string,
}

export default function VerificationEmailProps({ username, otp} : VerificationEmailProps) {
  return (
    <Html lang='en' dir='ltr'>
    <Head />
    <title>Verification Email</title>
    <Font fontFamily='Poppins'
     fallbackFontFamily='sans-serif' 
     webFont={{
        url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap',
        format: 'woff2',
      }}
      fontWeight= {400}
      fontStyle= 'normal'
     />
    <Section>
      <Row>
        <Preview>Your Verification Email</Preview>
        <Heading>Welcome {username}!</Heading>
        <Text>Your OTP is: {otp}</Text>
      </Row>
      <Row>
        <Text>Thank you for signing up. Please use the OTP above to verify your email address.</Text>
        </Row>
    </Section>
    </Html>
  )
}