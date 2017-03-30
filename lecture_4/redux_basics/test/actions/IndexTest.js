import {commentSubmitted} from '../../src/actions/index';

describe('commentSubmitted', () => {
  it('has increasing comment ID', () => {
    const submissions = [
      commentSubmitted(),
      commentSubmitted()
    ];
    expect(submissions[1].payload.id).to.eq(
      submissions[0].payload.id + 1
    );
  });
});
