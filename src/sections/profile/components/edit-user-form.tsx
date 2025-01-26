import {
  AvatarIcon,
  EditIcon,
  LinkIcon,
  OutlineCheckIcon,
  SolidCheckIcon,
  TagIcon,
} from "@/components/icons";
import { Typography } from "@/components/typography";
import { IUserProfile } from "@/interfaces/user";
import { useUserFormStore } from "@/stores/user";
import { useEffect } from "react";

export default function UserEditForm({ userInfo }: { userInfo: IUserProfile }) {
  const { formData, setFormData } = useUserFormStore();

  useEffect(() => {
    setFormData({
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      username: userInfo.username,
      bio: userInfo.bio,
      website_url: userInfo.website_url || "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleChange = (name: keyof IUserProfile, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="w-full h-full mt-[3rem] p-3">
      <div className="flex flex-col rounded-[2rem] bg-neutral2-2">
        <div className="w-full px-4 py-3">
          <Typography
            level="hairline1"
            className="text-tertiary uppercase opacity-50"
          >
            Edit Profile
          </Typography>
        </div>

        <ul className="w-full">
          {/* First Name */}
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className="text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <AvatarIcon />
              First Name
            </Typography>
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                name="first_name"
                className="grow text-primary text-sm opacity-80"
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
              />
              <SolidCheckIcon />
            </div>
          </li>

          {/* Last Name */}
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className="text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <AvatarIcon />
              Last Name
            </Typography>
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                name="last_name"
                className="grow text-primary text-sm opacity-80"
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
              />
              <SolidCheckIcon />
            </div>
          </li>

          {/* Username */}
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className="text-secondary flex items-center gap-3 min-w-[10rem] opacity-50"
            >
              <TagIcon />
              Username
            </Typography>
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                name="username"
                className="grow text-primary text-sm opacity-50 cursor-not-allowed"
                value={formData.username}
                readOnly
              />
              <OutlineCheckIcon />
            </div>
          </li>

          {/* Bio */}
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-start md:gap-3">
            <Typography
              level="base2r"
              className="text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <EditIcon />
              Bio
            </Typography>
            <textarea
              name="bio"
              className="grow min-h-[8.75rem] max-h-[8.75rem] bg-transparent focus:outline-none text-primary text-sm opacity-80"
              defaultValue={formData.bio}
              placeholder="Enter your bio"
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </li>

          {/* Link */}
          <li className="p-4 flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
            <Typography
              level="base2r"
              className="text-secondary opacity-80 flex items-center gap-3 min-w-[10rem]"
            >
              <LinkIcon />
              Link
            </Typography>
            <div className="w-full flex justify-between items-center">
              <input
                type="text"
                name="link"
                className="grow text-primary text-sm opacity-80"
                placeholder="https://"
                value={formData.website_url}
                onChange={(e) => handleChange("website_url", e.target.value)}
              />
              <OutlineCheckIcon />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
