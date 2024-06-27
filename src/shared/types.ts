export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export type SetSelectedPage = React.Dispatch<
  React.SetStateAction<SelectedPage>
>;
