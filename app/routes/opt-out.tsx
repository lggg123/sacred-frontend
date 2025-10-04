import {useState} from 'react';
import {useActionData, Form} from 'react-router';
import type {Route} from './+types/opt-out';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Opt Out - Sacred Line Studio'},
    {
      name: 'description',
      content: 'Manage your privacy preferences and opt out of communications from Sacred Line Studio.',
    },
  ];
};

export async function action({request}: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get('email') as string;
  const optOutType = formData.get('optOutType') as string;

  // Here you would typically integrate with your email service provider
  // For now, we'll just return a success message
  console.log(`Opt-out request for ${email} - Type: ${optOutType}`);

  return {
    success: true,
    message: `We've processed your opt-out request for ${email}. You should stop receiving ${optOutType} communications within 48 hours.`,
  };
}

export default function OptOut() {
  const actionData = useActionData<typeof action>();
  const [email, setEmail] = useState('');
  const [optOutType, setOptOutType] = useState('all');

  return (
    <div className="opt-out-page">
      <div className="opt-out-content">
        <h1>Manage Your Privacy Preferences</h1>
        
        {actionData?.success ? (
          <div className="opt-out-success">
            <p className="success-message">{actionData.message}</p>
            <p>
              If you have any questions or need immediate assistance, please contact us at{' '}
              <a href="mailto:contact@sacredlinestudio.com">contact@sacredlinestudio.com</a>
            </p>
          </div>
        ) : (
          <>
            <p>
              At Sacred Line Studio, we respect your privacy and your right to control how we communicate with you. 
              Use this form to opt out of specific types of communications or all communications entirely.
            </p>

            <Form method="post" className="opt-out-form">
              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="optOutType">What would you like to opt out of?</label>
                <select
                  id="optOutType"
                  name="optOutType"
                  value={optOutType}
                  onChange={(e) => setOptOutType(e.target.value)}
                  required
                >
                  <option value="marketing">Marketing & Promotional Emails</option>
                  <option value="newsletter">Newsletter</option>
                  <option value="product-updates">Product Updates</option>
                  <option value="all">All Communications</option>
                </select>
              </div>

              <button type="submit">Submit Opt-Out Request</button>
            </Form>

            <div className="opt-out-info">
              <h3>Your Rights</h3>
              <ul>
                <li>You can opt out of any communications at any time</li>
                <li>We will process your request within 48 hours</li>
                <li>Essential order and account communications may still be sent</li>
                <li>You can re-subscribe at any time by contacting us</li>
              </ul>

              <h3>Questions?</h3>
              <p>
                If you have any questions about our privacy practices or need assistance, 
                please contact us at{' '}
                <a href="mailto:contact@sacredlinestudio.com">contact@sacredlinestudio.com</a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}