import React from "react";
import { Link, useParams } from "react-router-dom";
import { getMemberDetail } from "./github.api";
import { MemberDetailEntity } from "./github.model";

export const GithubDetail: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetailEntity | undefined>(
    undefined,
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { id, filter } = useParams();

  React.useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    setError(null);

    getMemberDetail(id)
      .then((json) => {
        setMember(json);
        setIsLoading(false);
      })
      .catch(() => {
        setMember(undefined);
        setError("Could not load the user details.");
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="detail-page">
      <div className="detail-card">
        {isLoading && <div className="list-state">Loading...</div>}
        {error && <div className="list-state error">{error}</div>}
        {!isLoading && !error && member && (
          <>
            <div className="detail-header">
              <img
                className="detail-avatar"
                src={member?.avatar_url}
                alt={member?.login ?? "avatar"}
              />
              <div>
                <h3 className="detail-title">
                  {member?.name ?? member?.login ?? "User detail"}
                </h3>
                <div className="detail-subtitle">User ID: {id}</div>
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-field">
                <div className="detail-field-label">Login</div>
                <div className="detail-field-value">{member?.login ?? "-"}</div>
              </div>
              <div className="detail-field">
                <div className="detail-field-label">Company</div>
                <div className="detail-field-value">
                  {member?.company ?? "-"}
                </div>
              </div>
              <div className="detail-field">
                <div className="detail-field-label">Bio</div>
                <div className="detail-field-value">
                  {member?.bio ?? "unkwon"}
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <Link
                to={`/list/${filter ?? "lemoncode"}`}
                className="detail-back"
              >
                Navigate back to List
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
