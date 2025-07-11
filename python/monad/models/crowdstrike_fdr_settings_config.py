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

from pydantic import BaseModel, ConfigDict, Field, StrictInt, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self

class CrowdstrikeFdrSettingsConfig(BaseModel):
    """
    Crowdstrike Falcon Data Replicator settings
    """ # noqa: E501
    aws_queue_url: Optional[StrictStr] = Field(default=None, description="AWS SQS queue URL provided to you by the CrowdStrike Falcon console")
    aws_region_name: Optional[StrictStr] = Field(default=None, description="Name of the region where the queue resides")
    aws_s3_url: Optional[StrictStr] = Field(default=None, description="The URL of the S3 bucket")
    cron: Optional[StrictStr] = Field(default=None, description="The time in seconds to wait before each check of the queue for more messages")
    visibility_timeout: Optional[StrictInt] = Field(default=None, description="Time in seconds before a message is returned back to the SQS queue")
    __properties: ClassVar[List[str]] = ["aws_queue_url", "aws_region_name", "aws_s3_url", "cron", "visibility_timeout"]

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
        """Create an instance of CrowdstrikeFdrSettingsConfig from a JSON string"""
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
        """Create an instance of CrowdstrikeFdrSettingsConfig from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "aws_queue_url": obj.get("aws_queue_url"),
            "aws_region_name": obj.get("aws_region_name"),
            "aws_s3_url": obj.get("aws_s3_url"),
            "cron": obj.get("cron"),
            "visibility_timeout": obj.get("visibility_timeout")
        })
        return _obj


