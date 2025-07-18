# coding: utf-8

"""
    Monad API

    This is the monad API

    The version of the OpenAPI document: 1.0
    Contact: support@swagger.io
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

from monad.models.aws_guardduty_settings_config import AwsGuarddutySettingsConfig

class TestAwsGuarddutySettingsConfig(unittest.TestCase):
    """AwsGuarddutySettingsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> AwsGuarddutySettingsConfig:
        """Test AwsGuarddutySettingsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `AwsGuarddutySettingsConfig`
        """
        model = AwsGuarddutySettingsConfig()
        if include_optional:
            return AwsGuarddutySettingsConfig(
                region = '',
                role_arn = '',
                severity = ''
            )
        else:
            return AwsGuarddutySettingsConfig(
        )
        """

    def testAwsGuarddutySettingsConfig(self):
        """Test AwsGuarddutySettingsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
