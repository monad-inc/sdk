/**
 * Monad API
 * This is the monad API
 *
 * OpenAPI spec version: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ModelsBillingProduct } from '../models/ModelsBillingProduct';
import { HttpFile } from '../http/http';

export class ModelsBillingAccount {
    'billingEmail'?: string;
    'createdAt'?: string;
    'currentBillingCycleEnd'?: string;
    'currentBillingCycleStart'?: string;
    'deletedAt'?: string;
    'description'?: string;
    'hasPaymentMethod'?: boolean;
    'id'?: string;
    'name'?: string;
    'nextProduct'?: ModelsBillingProduct;
    'nextProductId'?: string;
    'product'?: ModelsBillingProduct;
    'productChangeAfter'?: string;
    'productId'?: string;
    'status'?: string;
    'suspendOn'?: string;
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "billingEmail",
            "baseName": "billing_email",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentBillingCycleEnd",
            "baseName": "current_billing_cycle_end",
            "type": "string",
            "format": ""
        },
        {
            "name": "currentBillingCycleStart",
            "baseName": "current_billing_cycle_start",
            "type": "string",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasPaymentMethod",
            "baseName": "has_payment_method",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextProduct",
            "baseName": "next_product",
            "type": "ModelsBillingProduct",
            "format": ""
        },
        {
            "name": "nextProductId",
            "baseName": "next_product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "ModelsBillingProduct",
            "format": ""
        },
        {
            "name": "productChangeAfter",
            "baseName": "product_change_after",
            "type": "string",
            "format": ""
        },
        {
            "name": "productId",
            "baseName": "product_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "suspendOn",
            "baseName": "suspend_on",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelsBillingAccount.attributeTypeMap;
    }

    public constructor() {
    }
}
