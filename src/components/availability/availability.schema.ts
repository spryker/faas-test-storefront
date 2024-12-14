import { ContentComponentSchema } from '@spryker-oryx/experience';
import { FormFieldType } from '@spryker-oryx/form';
import { ProductAvailabilityComponent } from './availability.component';

export const productAvailabilitySchema: ContentComponentSchema<ProductAvailabilityComponent> =
  {
    name: 'Product Availability',
    group: 'Product',
    icon: 'inventory',
    options: { lowStockThreshold: { type: FormFieldType.Number } },
  };
