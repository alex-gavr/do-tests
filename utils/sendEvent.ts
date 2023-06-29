import { TValidOffer } from 'config';
import { z } from 'zod';

const dataVariantSchema = z.enum(['offer', 'game']);

export type TDataVariant = z.infer<typeof dataVariantSchema>;

export const offerDataSchema = z.object({
  track: z.string(),
  offerId: z.number(),
  step: z.number().optional(),
  totalSteps: z.optional(z.number()),
  buttonText: z.string().optional(),
  imgId: z.string().optional(),
});

export type TOfferEventProperties = z.infer<typeof offerDataSchema>;

export const gameDataSchema = z.object({
  track: z.string(),
  offerId: z.literal('populations-game'),
  userId: z.string().min(1).optional(),
  playerName: z.string().optional(),
  country: z.string().optional(),
  topScore: z.number().min(0).optional(),
  hintsAvailable: z.number().min(0).optional(),
  roundsPlayed: z.number().min(0).optional(),
});

export type TGameEventProperties = z.infer<typeof gameDataSchema>;

export interface ICustomEventProperties {
  track: string;
  offerId: TValidOffer;
  step?: number;
  totalSteps?: number;
  buttonText?: string | React.ReactNode;
  imgId?: string;
}

export const sendEvent = async (
  dataVariant: TDataVariant,
  data: TOfferEventProperties | TGameEventProperties,
) => {
  const body = checkBodyData(dataVariant, data);

  if (body === undefined) {
    return;
  }

  if (typeof window !== 'undefined') {
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_ROUTE_SECRET,
        dataVariant: `${dataVariant}`,
        url: `${window.location.href}`,
      },
      body: JSON.stringify(body),
    });
  }
};

export const checkBodyData = (
  dataVariant: TDataVariant,
  data: TOfferEventProperties | TGameEventProperties,
) => {
  if (dataVariant === 'offer') {
    const offerData = offerDataSchema.parse(data);
    return offerData;
  }
  if (dataVariant === 'game') {
    const gameData = gameDataSchema.parse(data);
    return gameData;
  }
};
