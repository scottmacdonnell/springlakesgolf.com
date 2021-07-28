import * as AuthProviders from './AuthProviders'
import * as Text from './ui/Text'
import * as Form from './ui/Form'

import styles from '../styles/components/LogInProviders.module.scss'

export default function LogInProviders() {
  return (
    <Wrapper>
      <InnerWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Text.Heading2>Welcome Back</Text.Heading2>

          <Form.Spacer />
          <Form.Spacer />

          <AuthProviders.Wrapper>
            {/* <AuthProviders.Facebook>Sign In with Facebook</AuthProviders.Facebook>
            <Form.Spacer /> */}
            <AuthProviders.Google>Sign In with Google</AuthProviders.Google>
            <Form.Spacer />
            <AuthProviders.Twitter>Sign In with Twitter</AuthProviders.Twitter>
            <Form.Spacer />
            <AuthProviders.Email
              href="/auth/email/login"
            >Sign In with Email</AuthProviders.Email>
          </AuthProviders.Wrapper>

          <Form.Spacer />
          <Form.Spacer />

          <Text.Anchor href="/auth/signup">
            <Text.Paragraph>Don't have an account yet? Sign up here!</Text.Paragraph>
          </Text.Anchor>
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

function Wrapper(props) {
  return <div className={styles.Wrapper} {...props} />
}

function InnerWrapper(props) {
  return <div className={styles.InnerWrapper} {...props} />
}