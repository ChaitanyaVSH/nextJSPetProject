const _404 = () => {
  return (
    <div>404 - Not found</div>
  )
}

/**
 * Handler to return custom layout for this component.
 * @param componentContent, component that needs to be wrapped with this custom layout
 * @returns this component with updated layout.
 */
_404.getLayout = (componentContent) => {
  return (
    <>
      <p>Unfortunately you landed on non existing page. <b>Served using custom component layouts.</b></p>
      <br></br>
      {componentContent}
    </>
  )
};

export default _404;
