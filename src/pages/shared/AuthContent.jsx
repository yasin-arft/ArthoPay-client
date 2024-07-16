import PropTypes from 'prop-types';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"

const AuthContent = ({ form, onSubmit }) => {
  
  // pin validation for only number
  const handlePinKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <main className="container px-3 max-w-screen-xl mx-auto">
      <section className="w-full h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-primary">Artho Pay</h1>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="emailOrPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email or Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email or phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pin</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your pin"
                          {...field}
                          inputMode="numeric"
                          pattern="\d*"
                          maxLength="5"
                          onKeyPress={handlePinKeyPress}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className='w-full'>Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        <p>Don&#39;t have an account? <Link to={'/create-account'} className="text-blue-600 underline">Create an account</Link>.</p>
      </section>
    </main>
  );
};

AuthContent.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func
};

export default AuthContent;