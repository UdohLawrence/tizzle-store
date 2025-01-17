import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const CredentialsSignInForm = () => {

  return (
    <form action="">
      <div className="space-y-6">
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            // default={signInDefaultValues.email}
            autoComplete='email'
          />
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            // default={signInDefaultValues.password}
            autoComplete='password'
          />
        </div>
        <div>
          <Button className='w-full' variant='default'>Sign In with Credentials</Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link target='_self' className='link' href='/sign-up'>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  )
}

export default CredentialsSignInForm;