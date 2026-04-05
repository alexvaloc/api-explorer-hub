import { MemberEntity, MemberDetailEntity } from "./github.model";

export const getMembers = async (
  org: string,
  page: number,
  perPage: number,
): Promise<MemberEntity[]> => {
  const url = `https://api.github.com/orgs/${org}/members?page=${page}&per_page=${perPage}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching Github Members");
  }
  const data = await response.json();
  return data;
};

export const getMemberDetail = async (
  id: string,
): Promise<MemberDetailEntity> => {
  const url = `https://api.github.com/users/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching Member Details");
  }
  const data = await response.json();
  return data;
};
