import * as primerComponents from '@primer/components'
import * as doctocatComponents from '@primer/gatsby-theme-doctocat'
import {
  CheckIcon,
  ZapIcon,
  XIcon,
  SearchIcon,
  DotIcon,
  OctofaceIcon,
  PersonIcon,
  MailIcon,
  GitCommitIcon,
  FlameIcon,
  MarkGithubIcon,
  NoteIcon,
  ProjectIcon,
  FilterIcon,
  GearIcon,
  TypographyIcon,
  VersionsIcon,
  ArrowRightIcon
} from '@primer/octicons-react'
import State from '../../../components/State'
import {Dialog as Dialog2} from '../../../../src/Dialog/Dialog'
import {AnchoredOverlay} from '../../../../src/AnchoredOverlay'
import {ConfirmationDialog, useConfirm} from '../../../../src/Dialog/ConfirmationDialog'
import {SelectPanel} from '../../../../src/SelectPanel/SelectPanel'

export default {
  ...doctocatComponents,
  ...primerComponents,
  State,
  CheckIcon,
  SearchIcon,
  ZapIcon,
  XIcon,
  DotIcon,
  OctofaceIcon,
  PersonIcon,
  MailIcon,
  GitCommitIcon,
  FlameIcon,
  MarkGithubIcon,
  NoteIcon,
  ProjectIcon,
  FilterIcon,
  GearIcon,
  TypographyIcon,
  VersionsIcon,
  ArrowRightIcon,
  Dialog2,
  ConfirmationDialog,
  useConfirm,
  AnchoredOverlay,
  SelectPanel
}
