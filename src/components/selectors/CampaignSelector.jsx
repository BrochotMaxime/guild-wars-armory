function CampaignSelector({
  campaigns,
  availableCampaignIds,
  selectedCampaign,
  onSelectCampaign,
}) {
  return (
    <div
      className={`selector-grid selector-grid--campaigns ${
        selectedCampaign ? "selector-grid--has-selection" : ""
      }`}
      role="group"
      aria-label="Choose a campaign"
    >
      {campaigns.map((campaign) => {
        const isAvailable = availableCampaignIds.has(campaign.id);
        const isSelected = selectedCampaign?.id === campaign.id;

        return (
          <button
            key={campaign.id}
            type="button"
            className={`campaign-card ${
              isSelected ? "campaign-card--selected" : ""
            }`}
            aria-pressed={isSelected}
            disabled={!isAvailable}
            onClick={() => onSelectCampaign(campaign)}
          >
            <img
              className="campaign-card__image"
              src={campaign.image}
              alt=""
              loading="lazy"
              decoding="async"
            />

            <span className="campaign-card__content">
              <span className="campaign-card__name">{campaign.name}</span>

              {!isAvailable && (
                <span className="campaign-card__availability">
                  No armor available
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CampaignSelector;
