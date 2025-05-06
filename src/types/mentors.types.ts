export type MentorsProps = {
  email: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  specialty: string;
  _id: string;
};

export type MentorsResponse = {
  mentors: MentorsProps[];
  totalPages: number;
};
