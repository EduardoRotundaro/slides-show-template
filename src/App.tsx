import { useState } from 'react';

import { CONTENTS } from './data/content';
import NavigationButton from './components/NavigationButton';
import Page from './Page';

function App() {
  const [page, setPage] = useState(0);

  const nextAction = function () {
    if (page < (CONTENTS.length - 1)) setPage(page + 1);
  };

  const prevAction = function () {
    if (page) setPage(page - 1);
  };

  return (
    <main>
      {!!page && (
        <NavigationButton
          action="prev"
          disabled={false}
          onClick={prevAction}
        />
      )}
      <Page content={CONTENTS[page]} />
      {(page < (CONTENTS.length - 1)) && (
        <NavigationButton 
          action="next"
          disabled={false}
          onClick={nextAction}
        />
      )}
    </main>
  );
};

export default App;
