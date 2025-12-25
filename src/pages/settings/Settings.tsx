import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Section from "../../components/ui/Section";

export default function Settings() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-sm text-gray-500">
          Manage your account preferences and security.
        </p>
      </div>

      {/* Profile */}
      <Section title="Profile" description="Update your personal information.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full name" placeholder="John Doe" />
          <Input
            label="Email address"
            type="email"
            placeholder="john@acme.com"
          />
        </div>

        <div className="mt-6">
          <Button>Save changes</Button>
        </div>
      </Section>

      {/* Security */}
      <Section
        title="Security"
        description="Change your password and manage security settings."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Current password" type="password" />
          <Input label="New password" type="password" />
        </div>

        <div className="mt-6">
          <Button>Update password</Button>
        </div>
      </Section>

      {/* Danger Zone */}
      <Section
        title="Danger zone"
        description="Irreversible actions. Please be careful."
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Delete account</p>
            <p className="text-sm text-gray-500">
              This will permanently delete your account and all data.
            </p>
          </div>
          <Button variant="danger">Delete</Button>
        </div>
      </Section>
    </div>
  );
}
