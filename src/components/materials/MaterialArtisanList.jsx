function MaterialArtisanList({
  material,
  artisans,
  campaigns,
  craftingLocations,
}) {
  const artisanReferences = artisans
    .filter((artisan) => artisan.craftedMaterialIds.includes(material.id))
    .flatMap((artisan) => {
      const location = craftingLocations.find(
        (item) => item.id === artisan.locationId,
      );

      return location ? [{ artisan, location }] : [];
    });

  if (artisanReferences.length === 0) {
    return null;
  }

  const campaignGroups = campaigns
    .map((campaign) => ({
      campaign,
      artisanReferences: artisanReferences.filter(
        ({ location }) => location.campaignId === campaign.id,
      ),
    }))
    .filter(({ artisanReferences }) => artisanReferences.length > 0);

  const titleId = `material-${material.id}-artisans-title`;
  const artisanCount = artisanReferences.length;
  const artisanLabel = artisanCount === 1 ? "artisan" : "artisans";

  return (
    <div
      className="material-details__artisans"
      role="group"
      aria-labelledby={titleId}
    >
      <h5 id={titleId}>Available from</h5>

      <details className="material-details__artisan-details">
        <summary>
          View {artisanCount} {artisanLabel}
        </summary>

        <div className="material-details__artisan-groups">
          {campaignGroups.map(({ campaign, artisanReferences }) => {
            const campaignTitleId = `${titleId}-${campaign.id}`;

            return (
              <div
                key={campaign.id}
                className="material-details__artisan-group"
                role="group"
                aria-labelledby={campaignTitleId}
              >
                <h6 id={campaignTitleId}>{campaign.name}</h6>

                <ul>
                  {artisanReferences.map(({ artisan, location }) => (
                    <li key={artisan.id}>
                      <a
                        className="material-details__artisan-link"
                        href={artisan.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${artisan.name} on Guild Wars Wiki — opens in a new tab`}
                      >
                        {artisan.name}
                        <span aria-hidden="true"> ↗</span>
                      </a>

                      <span className="material-details__artisan-location">
                        <span aria-hidden="true">Location: </span>

                        <a
                          className="material-details__artisan-location-link"
                          href={location.wikiUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${location.name} on Guild Wars Wiki — opens in a new tab`}
                        >
                          {location.name}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </details>
    </div>
  );
}

export default MaterialArtisanList;
