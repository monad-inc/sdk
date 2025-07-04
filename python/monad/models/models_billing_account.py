# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from pydantic import BaseModel, ConfigDict, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from monad.models.models_billing_product import ModelsBillingProduct
from typing import Optional, Set
from typing_extensions import Self

class ModelsBillingAccount(BaseModel):
    """
    ModelsBillingAccount
    """ # noqa: E501
    billing_email: Optional[StrictStr] = None
    created_at: Optional[StrictStr] = None
    current_billing_cycle_end: Optional[StrictStr] = None
    current_billing_cycle_start: Optional[StrictStr] = None
    deleted_at: Optional[StrictStr] = None
    description: Optional[StrictStr] = None
    has_payment_method: Optional[StrictBool] = None
    id: Optional[StrictStr] = None
    name: Optional[StrictStr] = None
    next_product: Optional[ModelsBillingProduct] = None
    next_product_id: Optional[StrictStr] = None
    product: Optional[ModelsBillingProduct] = None
    product_change_after: Optional[StrictStr] = None
    product_id: Optional[StrictStr] = None
    status: Optional[StrictStr] = None
    suspend_on: Optional[StrictStr] = None
    updated_at: Optional[StrictStr] = None
    __properties: ClassVar[List[str]] = ["billing_email", "created_at", "current_billing_cycle_end", "current_billing_cycle_start", "deleted_at", "description", "has_payment_method", "id", "name", "next_product", "next_product_id", "product", "product_change_after", "product_id", "status", "suspend_on", "updated_at"]

    model_config = ConfigDict(
        populate_by_name=True,
        validate_assignment=True,
        protected_namespaces=(),
    )


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of ModelsBillingAccount from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        excluded_fields: Set[str] = set([
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of next_product
        if self.next_product:
            _dict['next_product'] = self.next_product.to_dict()
        # override the default output from pydantic by calling `to_dict()` of product
        if self.product:
            _dict['product'] = self.product.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ModelsBillingAccount from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "billing_email": obj.get("billing_email"),
            "created_at": obj.get("created_at"),
            "current_billing_cycle_end": obj.get("current_billing_cycle_end"),
            "current_billing_cycle_start": obj.get("current_billing_cycle_start"),
            "deleted_at": obj.get("deleted_at"),
            "description": obj.get("description"),
            "has_payment_method": obj.get("has_payment_method"),
            "id": obj.get("id"),
            "name": obj.get("name"),
            "next_product": ModelsBillingProduct.from_dict(obj["next_product"]) if obj.get("next_product") is not None else None,
            "next_product_id": obj.get("next_product_id"),
            "product": ModelsBillingProduct.from_dict(obj["product"]) if obj.get("product") is not None else None,
            "product_change_after": obj.get("product_change_after"),
            "product_id": obj.get("product_id"),
            "status": obj.get("status"),
            "suspend_on": obj.get("suspend_on"),
            "updated_at": obj.get("updated_at")
        })
        return _obj


