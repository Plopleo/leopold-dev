export default function ProjectCard({ title, description, tags = [], projectUrl, sourceUrl }) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="card-title text-lg">{title}</h3>
            {tags.length > 0 && (
              <div className="flex gap-2 my-1.5">
                {tags.map((tag, index) => (
                  <div key={index} className={`badge badge-sm ${tag.color || 'badge-primary'}`}>
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-base">{description}</p>
        <div className="card-actions justify-end mt-3">
          {projectUrl && (
            <a href={projectUrl} target="_blank" className="btn btn-primary btn-sm">
              Visit website

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
            </svg>

            </a>
          )}
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" className="btn btn-outline btn-sm">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

