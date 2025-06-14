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

from pydantic import BaseModel, ConfigDict, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class CommunityEditionSettingsConfig(BaseModel):
    """
    GreyNoise Community Edition settings
    """ # noqa: E501
    destination_path: Optional[StrictStr] = Field(default=None, description="DestinationPath is the path where the GreyNoise data will be stored")
    error_on_rate_limit: Optional[StrictBool] = Field(default=None, description="ErrorOnRateLimit determines if rate limiting should cause an error (true) or return custom response (false)")
    ip_field_path: Optional[StrictStr] = Field(default=None, description="IPFieldPath is the path to the IP address field in the record")
    no_match_response: Optional[StrictStr] = Field(default=None, description="NoMatchResponse is the value to add when no match is found")
    rate_limit_response: Optional[StrictStr] = Field(default=None, description="RateLimitResponse is the value to add when rate limited")
    __properties: ClassVar[List[str]] = ["destination_path", "error_on_rate_limit", "ip_field_path", "no_match_response", "rate_limit_response"]

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
        """Create an instance of CommunityEditionSettingsConfig from a JSON string"""
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
        """Create an instance of CommunityEditionSettingsConfig from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "destination_path": obj.get("destination_path"),
            "error_on_rate_limit": obj.get("error_on_rate_limit"),
            "ip_field_path": obj.get("ip_field_path"),
            "no_match_response": obj.get("no_match_response"),
            "rate_limit_response": obj.get("rate_limit_response")
        })
        return _obj


