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

from pydantic import BaseModel, ConfigDict, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class AzureVnetFlowLogsSettingsConfig(BaseModel):
    """
    Microsoft Azure Vnet Flow Logs settings
    """ # noqa: E501
    prefix: Optional[StrictStr] = None
    region: Optional[StrictStr] = Field(default=None, description="The Azure region where the virtual network is located")
    resource_group_name: Optional[StrictStr] = Field(default=None, description="The name of the resource group containing the virtual network")
    storage_account_url: Optional[StrictStr] = Field(default=None, description="The Azure storage account URL where flow logs are stored")
    subscription_id: Optional[StrictStr] = Field(default=None, description="The Azure subscription ID where the virtual network and storage account are located")
    tenant_id: Optional[StrictStr] = Field(default=None, description="The Azure Entra ID tenant (directory) ID.")
    virtual_network_name: Optional[StrictStr] = Field(default=None, description="The name of the virtual network for which flow logs are being collected")
    __properties: ClassVar[List[str]] = ["prefix", "region", "resource_group_name", "storage_account_url", "subscription_id", "tenant_id", "virtual_network_name"]

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
        """Create an instance of AzureVnetFlowLogsSettingsConfig from a JSON string"""
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
        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of AzureVnetFlowLogsSettingsConfig from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "prefix": obj.get("prefix"),
            "region": obj.get("region"),
            "resource_group_name": obj.get("resource_group_name"),
            "storage_account_url": obj.get("storage_account_url"),
            "subscription_id": obj.get("subscription_id"),
            "tenant_id": obj.get("tenant_id"),
            "virtual_network_name": obj.get("virtual_network_name")
        })
        return _obj


