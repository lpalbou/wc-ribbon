/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcGoAutocomplete {
        /**
          * Category to constrain the search; by default search "gene" Other values accepted: `undefined` : search both terms and genes `gene` : will only search genes used in GO `biological%20process` : will search for GO BP terms `molecular%20function` : will search for GO MF terms `cellular%20component` : will search for GO CC terms `cellular%20component,molecular%20function,biological%20process` : will search any GO term
         */
        "category": string;
        /**
          * Maximum number of results to show
         */
        "maxResults": number;
        /**
          * Default placeholder for the autocomplete
         */
        "placeholder": string;
        "value": string;
    }
}
export interface WcGoAutocompleteCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWcGoAutocompleteElement;
}
declare global {
    interface HTMLWcGoAutocompleteElementEventMap {
        "itemSelected": any;
    }
    interface HTMLWcGoAutocompleteElement extends Components.WcGoAutocomplete, HTMLStencilElement {
        addEventListener<K extends keyof HTMLWcGoAutocompleteElementEventMap>(type: K, listener: (this: HTMLWcGoAutocompleteElement, ev: WcGoAutocompleteCustomEvent<HTMLWcGoAutocompleteElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLWcGoAutocompleteElementEventMap>(type: K, listener: (this: HTMLWcGoAutocompleteElement, ev: WcGoAutocompleteCustomEvent<HTMLWcGoAutocompleteElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLWcGoAutocompleteElement: {
        prototype: HTMLWcGoAutocompleteElement;
        new (): HTMLWcGoAutocompleteElement;
    };
    interface HTMLElementTagNameMap {
        "wc-go-autocomplete": HTMLWcGoAutocompleteElement;
    }
}
declare namespace LocalJSX {
    interface WcGoAutocomplete {
        /**
          * Category to constrain the search; by default search "gene" Other values accepted: `undefined` : search both terms and genes `gene` : will only search genes used in GO `biological%20process` : will search for GO BP terms `molecular%20function` : will search for GO MF terms `cellular%20component` : will search for GO CC terms `cellular%20component,molecular%20function,biological%20process` : will search any GO term
         */
        "category"?: string;
        /**
          * Maximum number of results to show
         */
        "maxResults"?: number;
        /**
          * Event triggered whenever an item is selected from the autocomplete
         */
        "onItemSelected"?: (event: WcGoAutocompleteCustomEvent<any>) => void;
        /**
          * Default placeholder for the autocomplete
         */
        "placeholder"?: string;
        "value"?: string;
    }
    interface IntrinsicElements {
        "wc-go-autocomplete": WcGoAutocomplete;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wc-go-autocomplete": LocalJSX.WcGoAutocomplete & JSXBase.HTMLAttributes<HTMLWcGoAutocompleteElement>;
        }
    }
}
