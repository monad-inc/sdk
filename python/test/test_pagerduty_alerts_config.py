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

from monad.models.pagerduty_alerts_config import PagerdutyAlertsConfig

class TestPagerdutyAlertsConfig(unittest.TestCase):
    """PagerdutyAlertsConfig unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional) -> PagerdutyAlertsConfig:
        """Test PagerdutyAlertsConfig
            include_optional is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # uncomment below to create an instance of `PagerdutyAlertsConfig`
        """
        model = PagerdutyAlertsConfig()
        if include_optional:
            return PagerdutyAlertsConfig(
                var_class = '',
                group = '',
                severity = ''
            )
        else:
            return PagerdutyAlertsConfig(
        )
        """

    def testPagerdutyAlertsConfig(self):
        """Test PagerdutyAlertsConfig"""
        # inst_req_only = self.make_instance(include_optional=False)
        # inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
