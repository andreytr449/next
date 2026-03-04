import { getUser } from '@/app/entities/api/user';
import { SettingModule } from '@/app/modules/settings';

export default async function SettingsPage() {
  const response = await getUser();

  if (!response.ok) {
    throw new Error(response.error);
  }
  const { profile } = response;
  return <SettingModule profile={profile} />;
}
