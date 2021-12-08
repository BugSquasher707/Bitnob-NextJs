const Caret = props => {
  return props.active ? (
    <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.75 1.25L10.25 9.75L1.75 1.25" stroke="#00CC89" strokeWidth="2.42857" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2L10.5 10.5L2 19" stroke="#011911" strokeWidth="2.42857" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Caret;