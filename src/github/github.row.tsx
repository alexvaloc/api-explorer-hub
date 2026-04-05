import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import { MemberEntity } from "./github.model";

interface Props {
  member: MemberEntity;
  filter?: string;
}

export const GithubRow: React.FC<Props> = ({ member, filter }) => {
  return (
    <Link
      to={routes.detail(member.login, filter)}
      className="member-row member-row-link"
    >
      <img src={member.avatar_url} alt={member.login} />
      <span>{member.id}</span>
      <span>{member.login}</span>
    </Link>
  );
};
//`/detail/${member.login}/${filter}`
