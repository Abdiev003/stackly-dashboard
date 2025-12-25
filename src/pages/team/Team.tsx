import Section from "../../components/ui/Section";
import { Table, THead, TBody } from "../../components/ui/Table";
import { teamMembers } from "../../data/team";

export default function Team() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Team</h2>
          <p className="text-sm text-gray-500">
            Manage your team members and their roles.
          </p>
        </div>

        <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm">
          Invite member
        </button>
      </div>

      {/* Members */}
      <Section title="Members">
        <Table>
          <THead>
            <tr>
              <th className="pb-3">Name</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Role</th>
              <th className="pb-3 text-right">Action</th>
            </tr>
          </THead>

          <TBody>
            {teamMembers.map((m) => (
              <tr key={m.id}>
                <td className="py-3 font-medium">{m.name}</td>
                <td className="py-3 text-gray-500">{m.email}</td>
                <td className="py-3">
                  <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-neutral-700">
                    {m.role}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <button className="text-sm text-primary hover:underline">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </TBody>
        </Table>
      </Section>
    </div>
  );
}
