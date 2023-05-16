export interface IVignetteInitialState {
  isOpen: boolean;
  banner_id: number | null;
  title: string | null;
  text: string | null;
  icon: string | null;
  click: string | null;
  impression_url: string | null; // Trigger when impression
}
export interface IVignette {
  banner_id: number;
  title: string;
  text: string;
  icon: string;
  click: string;
  impression_url: string;
}
