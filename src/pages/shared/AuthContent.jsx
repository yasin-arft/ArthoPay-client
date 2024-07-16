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
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const AuthContent = ({ formType, form, onSubmit }) => {

  // pin validation for only number
  const handlePinKeyPress = (event) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  return (
    <main className="container px-3 max-w-screen-xl mx-auto">
      <section className="w-full min-h-screen flex flex-col justify-center items-center gap-4 pt-4 pb-8">
        <h1 className="text-4xl font-bold text-primary">Artho Pay</h1>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center underline">
              {
                formType === 'login' ? 'Please Login' : 'Create Your Account'
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                {
                  formType === 'login' && <FormField
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
                }
                {
                  formType === 'createAccount' && (
                    <>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter yourphone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )
                }
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
                {
                  formType === 'createAccount' && (
                    <FormField
                      className="mb-4"
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Register as</FormLabel>
                          <FormControl>
                            <RadioGroup 
                            className="flex"
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="user" id="user" />
                                <Label htmlFor="user">User</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="agent" id="agent" />
                                <Label htmlFor="agent">Agent</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )
                }
                <Button type="submit" className='w-full'>
                  {
                    formType === 'login' ? 'Login' : 'Create Account'
                  }
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        {
          formType === 'login' && <p>Don&#39;t have an account? <Link to={'/create-account'} className="text-blue-600 underline">Create an account</Link>.</p>
        }
        {
          formType === 'createAccount' && <p>Already have an account? <Link to={'/'} className="text-blue-600 underline">Please login</Link>.</p>
        }
      </section>
    </main>
  );
};

AuthContent.propTypes = {
  formType: PropTypes.string,
  form: PropTypes.object,
  onSubmit: PropTypes.func
};

export default AuthContent;