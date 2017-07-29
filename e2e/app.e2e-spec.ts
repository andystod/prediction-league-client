import { PredictionLeagueClientPage } from './app.po';

describe('prediction-league-client App', () => {
  let page: PredictionLeagueClientPage;

  beforeEach(() => {
    page = new PredictionLeagueClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
