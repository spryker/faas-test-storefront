import { CartComponentMixin } from '@spryker-oryx/cart';
import { ContentMixin, defaultOptions } from '@spryker-oryx/experience';
import { ProductMixin } from '@spryker-oryx/product';
import { computed, i18n } from '@spryker-oryx/utilities';
import { LitElement, TemplateResult } from 'lit';
import { html } from 'lit/static-html.js';
import {
  ProductAvailabilityOptions,
  StockAvailability,
} from './availability.model';
import { availabilityStyles } from './availability.styles';

@defaultOptions({ lowStockThreshold: 5 })
export class ProductAvailabilityComponent extends ProductMixin(
  CartComponentMixin(ContentMixin<ProductAvailabilityOptions>(LitElement))
) {
  static styles = availabilityStyles;

  protected override render(): TemplateResult {
    const stock = this.stockStatus();
    switch (stock) {
      case StockAvailability.OutOfStock:
        return html`<oryx-swatch
            color="var(--oryx-color-error-9)"
          ></oryx-swatch>
          ${i18n('product.stock.not-available')}`;
      case StockAvailability.InStock:
        return html`<oryx-swatch
            color="var(--oryx-color-warning-9)"
          ></oryx-swatch>
          ${i18n('product.stock.limited-amount-available')}`;
      default:
        return html`<oryx-swatch
            color="var(--oryx-color-success-9)"
          ></oryx-swatch>
          ${i18n('product.stock.available')}`;
    }
  }

  protected stockStatus = computed(() => {
    const available = this.available();

    const { lowStockThreshold: threshold = Infinity } = this.$options();
    if (available === 0) return StockAvailability.OutOfStock;
    if (available <= threshold) return StockAvailability.InStock;

    return StockAvailability.LowStock;
  });

  protected available = computed(() => {
    const qty = this.$product()?.availability?.quantity;
    return qty
      ? qty -
          this.$entries()
            .filter((entry) => entry.sku === this.$product()?.sku)
            .map((entry) => entry.quantity)
            .reduce((a: number, b) => a + b, 0)
      : 0;
  });

  protected renderIndicator(): TemplateResult {
    return html`<oryx-swatch color="--oryx-color-error"></oryx-swatch>`;
  }
}
