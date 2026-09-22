function WorkflowPanel({
  id,
  title,
  summary,
  isExpanded,
  isAvailable = true,
  onToggle,
  children,
}) {
  const headingId = `${id}-heading`;
  const contentId = `${id}-content`;
  const summaryText = summary || "Not selected";

  return (
    <section
      id={id}
      className={`workflow-panel ${
        isExpanded ? "workflow-panel--expanded" : ""
      }`}
      aria-labelledby={headingId}
    >
      <h2 id={headingId} className="workflow-panel__heading">
        <button
          type="button"
          className="workflow-panel__trigger"
          aria-label={`${title}: ${summaryText}`}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          disabled={!isAvailable}
          onClick={onToggle}
        >
          <span className="workflow-panel__title">{title}</span>

          <span className="workflow-panel__summary">{summaryText}</span>

          <span className="workflow-panel__chevron" aria-hidden="true">
            ▼
          </span>
        </button>
      </h2>

      <div
        id={contentId}
        className="workflow-panel__content"
        aria-hidden={!isExpanded}
        inert={!isExpanded}
      >
        <div className="workflow-panel__content-inner">{children}</div>
      </div>
    </section>
  );
}

export default WorkflowPanel;
