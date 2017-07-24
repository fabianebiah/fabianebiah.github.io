import { PetManiaPage } from './app.po';

describe('pet-mania App', () => {
  let page: PetManiaPage;

  beforeEach(() => {
    page = new PetManiaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
